#!/usr/bin/env node
import readline from 'readline';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync, spawn } from 'child_process';
import os from 'os';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = path.resolve(__dirname, '..');

const BOLD = '\x1b[1m';
const RESET = '\x1b[0m';
const GREEN = '\x1b[32m';
const CYAN = '\x1b[36m';
const YELLOW = '\x1b[33m';
const RED = '\x1b[31m';
const DIM = '\x1b[2m';

const APPLE = `
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                    ░░                                              
                                                    ░█▓▒░                                           
                                                     ░██▓▓▒                                         
                                 ░▒░                  ▒██▓▓█░                                       
                             ▒▒   ░▓▒░                 ▓█▓▓▓█▓░                                     
                              ▒▓▒░  ▒▓▒▒               ░██▓▓▓▓█░                                    
                                █▓▓░ ░█▓▓▒              ██▓▓▓▓▓█░░                                  
                                 ▒█▓▓▒░▓▓▓▓▓░           ▒██▓▓▓▓▓█▒                                  
                                  ░██▓▓▒▒█▓▓▓▓▒         ░██▓▓▓▓▓▓█░                                 
                                    ▒█▓▓▓▓██▓▓▓▓▒░       ██▓▓▓▓▓▓█▓░                                
                                     ░██▓▓▓▓▓▓▓▓▓▓▓░░   ░██▓▓▓▓▓▓▓█░                                
                                       ▒██▓▓▓▓▓▓▓▓▓▓▓▒░░██▓▓▓▓▓▓▓▓█▒                                
                                         ▓██▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓█▓                                
                                           ███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓                                
                                            ▒███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒                                
                         ▒                    ░███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒                                
                         ░█▓▒░                  ▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒                                
                           ▓▓▓▓▓▒░░           ░▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓█▓░                              
                            ░██▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███▓░                             
                              ░██▓▓▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓████                             
                                 ▒██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██████████████▒                            
                                    ▒██▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████▒░░░░░▒████                            
                                        ▒████████████████▒           ░█▓                            
                                              ░░░░░░                                                
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
`;

function printLogo() {
  console.log(CYAN + APPLE + RESET);
  console.log(BOLD + '                            macos-dev' + RESET);
  console.log(DIM + '              macOS Development for Claude Code & Pi\n' + RESET);
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ask(question) {
  return new Promise(resolve => rl.question(question, ans => resolve(ans.trim())));
}

function hasCommand(cmd) {
  try {
    execSync(`which ${cmd}`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src)) {
    const srcPath = path.join(src, entry);
    const destPath = path.join(dest, entry);
    const stat = fs.statSync(srcPath);
    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function printCheckbox(label, checked, number) {
  const box = checked ? GREEN + '[x]' + RESET : '[ ]';
  return `  ${box} ${number}. ${label}`;
}

async function selectPlatforms() {
  const state = { pi: true, claude: false };
  let first = true;

  while (true) {
    if (!first) {
      console.log('');
    }
    first = false;

    console.log(BOLD + '  Select platforms to install:' + RESET);
    console.log('');
    console.log(printCheckbox('Pi', state.pi, 1));
    console.log(printCheckbox('Claude Code', state.claude, 2));
    console.log('');
    console.log(DIM + '  Toggle: 1 or 2  |  Proceed: Enter or i' + RESET);
    console.log('  ' + DIM + '┌─────────────────────────────────┐' + RESET);
    console.log('  ' + DIM + '│        [ i ]  Install           │' + RESET);
    console.log('  ' + DIM + '└─────────────────────────────────┘' + RESET);

    const input = await ask('> ');

    if (input === '' || input === 'i' || input === 'I') {
      if (!state.pi && !state.claude) {
        console.log(RED + '  Please select at least one platform.' + RESET);
        continue;
      }
      break;
    }

    if (input === '1') {
      state.pi = !state.pi;
    } else if (input === '2') {
      state.claude = !state.claude;
    } else {
      console.log(RED + '  Invalid input. Use 1, 2, or Enter/i to proceed.' + RESET);
    }
  }

  return state;
}

async function installPi() {
  console.log('\n' + BOLD + '📦 Installing for Pi...' + RESET);

  const piCli = hasCommand('pi');

  if (piCli) {
    console.log(YELLOW + '   Pi CLI detected.' + RESET);
    const usePi = await ask('   Install via `pi install npm:macos-dev-code`? [Y/n] ');
    if (usePi.toLowerCase() !== 'n') {
      try {
        console.log(DIM + '   Running: pi install npm:macos-dev-code' + RESET);
        execSync('pi install npm:macos-dev-code', { stdio: 'inherit' });
        console.log(GREEN + '   ✅ Installed via Pi CLI' + RESET);
        return;
      } catch (e) {
        console.log(RED + '   ⚠️  Pi install failed. Falling back to manual copy.' + RESET);
      }
    }
  }

  // Manual copy to ~/.pi/agent/skills/
  const piSkillsDir = path.join(os.homedir(), '.pi', 'agent', 'skills');
  const targetDir = path.join(piSkillsDir, 'macos-development');

  console.log(DIM + `   Copying to ${targetDir} ...` + RESET);
  fs.mkdirSync(targetDir, { recursive: true });

  const source = path.join(PKG_ROOT, 'skills', 'macos-development');
  copyDir(source, targetDir);

  console.log(GREEN + '   ✅ Copied to ~/.pi/agent/skills/macos-development' + RESET);
  console.log(YELLOW + '   Run `pi config` to verify the skill is enabled.' + RESET);
}

async function installClaudeCode() {
  console.log('\n' + BOLD + '📎 Installing for Claude Code...' + RESET);

  const claudeCli = hasCommand('claude');

  // Try to find a local plugins directory
  const candidates = [
    path.join(os.homedir(), '.claude', 'plugins'),
    path.join(os.homedir(), '.config', 'claude', 'plugins'),
    path.join(os.homedir(), 'Library', 'Application Support', 'Claude', 'plugins'),
  ];

  let foundDir = null;
  for (const dir of candidates) {
    if (fs.existsSync(dir)) {
      foundDir = dir;
      break;
    }
  }

  if (foundDir) {
    console.log(YELLOW + `   Found Claude Code plugins directory: ${foundDir}` + RESET);
    const copyLocal = await ask('   Copy plugin files there? [Y/n] ');
    if (copyLocal.toLowerCase() !== 'n') {
      const target = path.join(foundDir, 'macos-dev');
      fs.mkdirSync(target, { recursive: true });
      copyDir(PKG_ROOT, target);
      console.log(GREEN + `   ✅ Copied to ${target}` + RESET);
      if (claudeCli) {
        console.log(YELLOW + '   Start Claude Code with: claude --plugin-dir ' + target + RESET);
      }
      return;
    }
  }

  // Fallback: marketplace instructions
  console.log(YELLOW + '   Claude Code plugins are typically installed via the marketplace.' + RESET);
  console.log('   Run these commands inside Claude Code:\n');
  console.log(CYAN + '   /plugin marketplace add e-palmisano/macos-dev' + RESET);
  console.log(CYAN + '   /plugin install macos-dev' + RESET);
  console.log('');

  if (claudeCli) {
    const openNow = await ask('   Open Claude Code now? [y/N] ');
    if (openNow.toLowerCase() === 'y') {
      try {
        spawn('claude', [], { detached: true, stdio: 'ignore' });
        console.log(GREEN + '   🚀 Claude Code launched in background.' + RESET);
      } catch {
        console.log(RED + '   ⚠️  Could not launch Claude Code automatically.' + RESET);
      }
    }
  }
}

async function main() {
  printLogo();

  const selected = await selectPlatforms();

  if (selected.pi) {
    await installPi();
  }

  if (selected.claude) {
    await installClaudeCode();
  }

  console.log('\n' + GREEN + BOLD + '🎉 Installation complete!' + RESET);
  console.log(DIM + '   Ask: "Adopt Liquid Glass in my SwiftUI Mac app" to test.' + RESET);

  rl.close();
}

main().catch(err => {
  console.error(RED + err.message + RESET);
  process.exit(1);
});
