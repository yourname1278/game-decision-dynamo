const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center">
              <span className="text-background font-bold text-lg">L</span>
            </div>
            <span className="text-2xl font-bold text-foreground">LobbyNow</span>
          </div>
          
          <p className="text-muted-foreground mb-4">
            Copyright © {currentYear} LobbyNow. All rights reserved.
          </p>
          
          <p className="text-xs text-muted-foreground max-w-4xl mx-auto">
            Steam, Electronic Arts, Battle.net and related marks are trademarks of their respective owners. 
            LobbyNow is not affiliated with or endorsed by them.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;