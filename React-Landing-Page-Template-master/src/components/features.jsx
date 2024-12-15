import React from "react";
const Card = ({ image }) => {
  return (
    <div className="card">
      <img className="gameplay" src={image}  />
     
    </div>

  );
};

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image) => (
        <Card className="gamecard" key={image.id} image={image.src}  />
      ))}
    </div>
  );
};



export const Features = () => {
  const images = [
    { id: 1, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEmQA2vd_1CRXemx5d2diIEseQWmhLbPHBQ&usqp=CAU"},
    { id: 2, src: "https://a.silvergames.com/j/b/gomoku.jpg", title: "GOMOKU" },
    { id: 3, src: "https://store-images.s-microsoft.com/image/apps.32934.14436585613467194.2057f5c1-aa30-4ec0-823d-d8c182a8567b.091453fb-cabe-4594-b086-d163be6f5e9c?q=90&w=256&h=384&mode=crop&format=jpg&background=%230078D7"},
    { id: 4, src: "https://papergames.io/en/assets/games/battleships/thumbnail.png" },
    { id: 5, src: "https://i.pinimg.com/originals/ee/65/08/ee6508c527b35f6ca3516280495484ab.jpg"},
    { id: 6, src: "https://www.solitaireparadise.com/static/game-images/scrabble-350x300-c.png" },
   
  ];

 
  return (
    <div className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Games</h2>
          <ImageGrid images={images} />
          </div>
        
        
        
        </div>
        <div className="gamebutton">
        <a href="https://play.google.com/store/apps/details?id=com.chess&hl=en&gl=US"> <button className="gbutton">CHESS</button></a>
        <a href="https://play.google.com/store/apps/details?id=uk.co.aifactory.gomokufree&hl=en&gl=US"><button className="gbutton">GOMOKU</button></a>
        <a href="https://play.google.com/store/apps/details?id=com.californiagames.game.board.games.strategy.free.connect.four.in4.a.row&hl=en&gl=US"><button className="gbutton">CONNECT</button></a>
        <a href="https://play.google.com/store/apps/details?id=com.marmalade.battleship&hl=en&gl=US"><button className="gbutton">BATTLESHIP</button></a>
        <a href="https://play.google.com/store/apps/details?id=com.playdate.gcandyland&hl=en&gl=US"><button className="gbutton">CANDYLAND</button></a>
        <a href="https://play.google.com/store/apps/details?id=com.pieyel.scrabble&hl=en&gl=US"><button className="gbutton">SCRABBLE</button></a>
       </div>
        </div>
  );
};

