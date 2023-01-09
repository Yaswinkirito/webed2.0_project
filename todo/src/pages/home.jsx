import React from 'react';

function Home() {
    return(
        <div>
        <div class="caraousel-container1">
        
             <div class="caraousel1">
                <div class="slider1">
                    <div class="slide-content1">
                        <h1 class="movie-title1">Webed 2.0</h1>
                        <p class="movie-des1">Your learning jounery begins</p>
                    </div>
                    <img class="silder2" src={require("../img/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg")} />   
                </div>
        </div>
        </div> 
        
        
        <div class="jumbotron" style={{marginLeft:50}}>
        <h1 class="text-white">Hello, ISTE</h1>
        <p class="text-white">This is our todo application</p>
        <div class="caraousel1">
        <div class="slider1">
                    <div class="slide-content1">
                        <h1 class="movie-title1">Getting Started</h1>
                        <p class="movie-des1">Start by Registering your account also dont forget to connect to your monogdb account</p>
                    </div>
                    <img class="silder2" style={{height:450}} src={require("../img/black-golden-royal-luxury-background-landing-page-free-vector.jpg")} />   
                </div>
                </div>
        <p><a class="btn btn-primary btn-lg" href="./register" role="button">Register Now</a></p>
        </div>
        
        </div>
        
          
    );
}

export default Home;