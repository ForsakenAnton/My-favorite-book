import logo from './logo.svg';
import './App.css';

// import React from 'react';

function App() {
  return (
    <div className="App">
      <p>Hello React. This is my first 'app'. On the React naturally :)</p>
      <h2>My favorite book</h2>
      <GetInfoOfFavoriteBook />
    </div>
  );
}


function GetInfoOfFavoriteBook() {
  return( 
  <div>
      <h3>{book.bookName}</h3>
      <img  src={book.imgPath}/>
      <p><em>{book.authorName}</em></p>
      <p>{book.genre}</p>
      <p><b>Review:</b></p>
      <p><a href={book.review[0]}>first</a></p>
  {/* for (const item of {book.review}) {
        <p><a href={item}></a></p>
      }  */}
      
  </div>
  );
}

const book = {
  bookName: "Pro ASP.NET MVC 4, 4th edition",
  imgPath: "https://1.bp.blogspot.com/-BRnogaaFclw/VH_VWNXHzpI/AAAAAAAAGuY/XFmPbOPN_28/s200/%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0-ASP-NET-MVC-5-%D1%81-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D0%B0%D0%BC%D0%B8-%D0%BD%D0%B0-C-sharp-5-%D0%B4%D0%BB%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%BE%D0%B2-978-5-8459-1911-3.jpg",
  authorName: "Адам Фримен",
  genre: "web программирование",
  review: [
    "http://shtonda.blogspot.com/2013/12/asp-net-mvc-5-framework-freeman.html",
  ]

};

// {/* <script type="text/babel">
//   const book = {
//     name: "Адам Фримен"
//   };
// </script> */}

export default App;
