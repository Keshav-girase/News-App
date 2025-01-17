import React, { Component } from "react";
import '../App.css';

export default class Carousel extends Component {
  render() {
    return (
        <div id="myCarousel" class="w-75 carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="carousel-igm" src="https://variety.com/wp-content/uploads/2020/11/TP-05820RC-1.jpg?w=1000" alt="random" /><div class="mask rgba-black-strong"></div>
                <div class="container">
                <div class="carousel-caption text-left">
                    <h1>Example headline.</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p><a class="btn btn-lg btn-primary" href="s" role="button">Sign up today</a></p>
                </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="carousel-igm" src="https://static01.nyt.com/images/2020/11/30/world/30karabakh-russia-1/30karabakh-russia-1-facebookJumbo-v4.jpg" alt="random" /><div class="mask rgba-black-strong"></div>
                <div class="container">
                <div class="carousel-caption">
                    <h1>Another example headline.</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p><a class="btn btn-lg btn-primary" href="l" role="button">Learn more</a></p>
                </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="carousel-igm" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-crown-season-4-emma-corrin-josh-oconnor-1605532221.jpg?crop=0.691xw:0.517xh;0.308xw,0.0561xh&resize=1200:*" alt="random" /><div class="mask rgba-black-strong"></div>
                <div class="container">
                <div class="carousel-caption text-right">
                    <h1>One more for good measure.</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p><a class="btn btn-lg btn-primary" href="b" role="button">Browse gallery</a></p>
                </div>
                </div>
            </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
        </div>

    );
  }
}
