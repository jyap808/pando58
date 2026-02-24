{ pkgs, inputs, lib, ... }:

{
  languages.javascript = {
    enable = true;
    npm = {
      enable = true;
      install.enable = true;
    };
  };
  
  scripts.gen.exec = "cd $DEVENV_ROOT/ergogen && ergogen .";
  scripts.genstl.exec = ''
    cd $DEVENV_ROOT/ergogen/output/cases
    for F in case_bottom_left case_bottom_right ; do
      npx @jscad/cli $F.jscad -o $F.stl
    done
  '';
  
  enterShell = ''
    echo "Ergogen is ready."
  '';
}
