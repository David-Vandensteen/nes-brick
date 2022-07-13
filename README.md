# nes-brick
Hot rebuild & run for NES ASM code  

## SetUp
```cmd
git clone git@github.com:David-Vandensteen/nes-brick.git
cd nes-brick
npm i
```
## Testing "hello" ASM project  (work on Windows only currently)
```cmd
npm run start:hello
```
This npm script download cc65 Assembler & Fceux emulator on your computer at **%temp%\nes-brick**  
he assemble the file **project\hello\hello.s** and he run it  

*(cc65 & Fceux are not installed permently, all is uncompress on your **%temp%** folder)*  
Hot-Reload : if you update **project\hello\hello.s** , the program is automatically rebuild and run
## Make your project
Create a folder for your NES project.  
Inside, edit your asm file and create a config file with mjs extension :  
```
export  default {
  emulator: {
    file: 'myfolder\\myprogram.nes',
    executable: 'myemulatorfolder\\myemulator.exe',
  },
  builder: {
    file: 'myprogram.s',
    executable: 'myfolderassembler\\myassemblerprogram.exe',
    params: '--verbose --target nes -o myprogram.nes',
  },
};
```
*See the config.mjs on the hello project for example (**src/project/hello/config.mjs**)*  

**For assemble & run it:** 
From **nes-brick**  folder, run :
```cmd
npm run start myfolder/myconfigfile.mjs
```
