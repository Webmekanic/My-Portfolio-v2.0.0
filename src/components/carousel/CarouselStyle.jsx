import styled from "styled-components"

export const MySlider = styled.div`
// border: 2px solid yellow;
  width: 100%;


.flickity-page-dots{
  // border: 2px solid red;
    position: absolute;
    width: 100%;
    bottom: -25px;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    line-height: 1;
}

.flickity-page-dots .dot.is-selected {
    opacity: 1;
}

.flickity-page-dots .dot {
    width: 18px;
    height: 18px;
    margin: 0;
    background: none;
    opacity: 1;
}

.flickity-page-dots .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 8px;
    background: ${({ theme }) => theme.colors.lightColor};
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    opacity: .25;
    cursor: pointer;
    // border: 2px solid red;
}




  

  .flickity-enabled.is-draggable {
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .flickity-enabled {
    position: relative;
    // border: 2px solid red;
  }

  .carousel-news .flickity-viewport {
    overflow: visible;
  }

  .flickity-viewport {
    overflow: hidden;
    position: relative;
    // height: 100%;
    touch-action: pan-x;
  }
  .flickity-slider {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    transform: translateX(-51.63%);
  }

  .carousel-news .carousel-cell:not(:last-child) {
    margin-right: 30px;
  }

  .carousel-news .carousel-cell {
    min-height: 360px;
    width: -webkit-calc(25% - 20px);
    width: -moz-calc(25% - 20px);
    width: calc(25% - 20px);
    position: absolute;
    left: 0px;
    transform: translateX(0%);
  }

  li {
    display: list-item;
    list-style: none;
  }

  .carousel--arrows-top-right .flickity-button:disabled {
    opacity: 0.2;
  }

  .carousel--arrows-top-right .flickity-prev-next-button.previous {
    right: 50px !important;
  }

  .carousel--arrows-top-right .flickity-prev-next-button.next,
  .carousel--arrows-top-right .flickity-prev-next-button.previous {
    top: -40px;
    left: auto !important;
    // right: 0 !important;
    // -webkit-transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    // -o-transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    // -moz-transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .flickity-prev-next-button.next,
  .flickity-prev-next-button.previous {
    width: 25px;
    height: 25px;
    background-color: transparent;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .flickity-button:disabled {
    // opacity: .3;
    cursor: auto;
    pointer-events: none;
}

  .flickity-prev-next-button.previous {
    // left: 30px;
    background-image: url(https://www.realfevr.com/_next/static/media/ico-arrow-white-left.26f64e30.svg;
  }


  .flickity-prev-next-button {
    // top: 50%;
    width: 44px;
    height: 44px;
    // -webkit-border-radius: 50%;
    // -moz-border-radius: 50%;
    border-radius: 50%;
    // -webkit-transform: translateY(-50%);
    // -moz-transform: translateY(-50%);
    // -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
    


.flickity-button {
  // position: absolute;
    // // background-color: hsla(0,0%,100%,.75);
    border: none;
    color: ${({ theme }) => theme.colors.lightColor}
  }
    


button {
  // background: none;
    // // border: none;
    // // -webkit-box-shadow: none;
    // // -moz-box-shadow: none;
    // box-shadow: none;
    // font-family: Azo Sans,arial,helvetica,sans-serif;
    // outline: 0!important;
    .flickity-prev-next-button.next svg, .flickity-prev-next-button.previous svg {
    display: none;
}


  
  
    
    

.flickity-prev-next-button .flickity-button-icon {position: absolute;
  left: 20%;
  top: 20%;
  width: 60%;
  height: 60%;
}
  
  
    


.flickity-button-icon {
  fill: currentColor;
  // border: 2px solid ${({ theme }) => theme.colors.lightColor};
}
    


svg {
overflow: hidden;
}


`
