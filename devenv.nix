{ pkgs, inputs, lib, ... }:

{
  packages = [
    pkgs.python313
    pkgs.python313Packages.pip
    pkgs.python313Packages.mkdocs
    pkgs.python313Packages.mkdocs-material
  ];

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
  scripts.serve.exec = "mkdocs serve";
  
  enterShell = ''
    echo "Ergogen is ready."
  '';
}
