/**
 * Run Flow and collect errors in JSON format
 * Reference https://github.com/facebook/nuclide/blob/master/pkg/nuclide-flow-rpc/lib/FlowRoot.js
 */
import flowBin from 'flow-bin';
import path from 'path';
import childProcess from 'child_process';


/**
 * Wrap critical Flow exception into default Error json format
 */
function fatalError(stderr) {
  return {
    errors: [{
      message: [{
        path: '',
        code: 0,
        line: 0,
        start: 0,
        descr: stderr
      }]
    }]
  };
}

function getFlowBin() {
  return process.env.FLOW_BIN || flowBin;
}

function executeFlow() {
  const args = ['--json'];
  const { stdout } = childProcess.spawnSync(getFlowBin(), args);
  const stringifiedStdout = stdout.toString();
  let parsed;

  try {
    parsed = JSON.parse(stringifiedStdout);
  } catch (e) {
    parsed = fatalError(stringifiedStdout);
  }

  // Loop through errors in the file
  const output = parsed.errors.map(error => error.message.map((message, i, whole) => {
    if (message.type === 'Comment' || !message.loc) {
      return false;
    }

    const comments = whole.find(_ => _.type === 'Comment');
    const messageDescr = `${comments ? comments.descr : ''} ${message.descr}`;

    return {
      message: messageDescr,
      path: message.path,
      start: message.loc.start.line,
      end: message.loc.end.line
    };
  }))
  .filter(error => error !== false)
  .reduce((p, c) => p.concat(c), []);

  return output.length
    ? output
    : true;
}

function Flow(filepath = './') {
  return executeFlow(path.normalize(filepath), {});
}

process.stdout.write(JSON.stringify(Flow()));

module.exports = Flow;
