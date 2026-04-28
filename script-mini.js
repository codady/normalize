
/**
 *  Last modified: 2026-04-28 08:52:19
 */
import { exec } from 'child_process';

const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`exec error: ${error}`);
        return;
      }
      if (stderr) {
        reject(`stderr: ${stderr}`);
        return;
      }
      resolve(stdout);
    });
  });
};

const minifyJsFile = (input, output) => {
  const command = `npx terser ${input} -o ${output} -c arguments,dead_code,directives,arrows,drop_console -m keep_classnames=true,keep_fnames=true`;
  return runCommand(command);
};


const minifyJs = async () => {
  try {
    // 压缩 CSS 文件
    await runCommand('cleancss -o ./dist/normalize.min.css ./src/normalize.css');
    await runCommand('cleancss -o ./dist/normalize.tailwind.min.css ./src/normalize.tailwind.css');
    
    console.log('Minification complete.');
  } catch (error) {
    console.error(`Error during minification: ${error}`);
  }
};

minifyJs();
