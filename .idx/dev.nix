{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.openssl
  ];
  idx.extensions = [
    
  
 "formulahendry.auto-close-tag"
 "formulahendry.auto-complete-tag"
 "formulahendry.auto-rename-tag"
 "PulkitGangwar.nextjs-app-directory-commands"
 "PulkitGangwar.nextjs-snippets"
 "redwan-hossain.auto-rename-tag-clone"];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}