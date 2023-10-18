class Film {
    constructor(id, cover, title, rating, synopsis, banner, category) {
        this.id = id
        this.cover = cover
        this.title = title
        this.rating = rating
        this.sypnosis = synopsis
        this.banner = banner
        this.category = category
    }

    bannerHtml(position) {
        return `
        <div class="fondobanner" style="background-image: url(${this.banner})">
    <div class="banner" onclick='bannerSelected(${position})'>
    <div id="titulo">
    <h1>${this.title}</h1>
        <h4 id="numero">(${this.rating})</h4>
        </div>
<p>${this.sypnosis}</p>
<div id="botones">
<button class="btn1"><img class="icon1" src="./icons/baseline_play_arrow_white_48dp.png"/><p class="btn-text1">PLAY</p></button>
<button class="btn2"><p class="btn-text2">SAVE</p><img class="icon2" src="./icons/baseline_bookmark_border_white_48dp.png"/></button>
  <h4>${this.category}</h4> </div>
        </div>
        </div>
    `
    }


    recommendedHtml(position) {
        return `
        <div class="scroll" onclick='scrollSelected(${position})'>
                    <img class="cover" src="${this.cover}" width="200" height="300"> </img> 
                    <div class="foot">
                   <p class="ratings">${this.rating}</p>
                    <img class="save" src="./icons/baseline_bookmark_border_white_48dp.png"height="20px" width="20px"> 
                    </div>
                    </div>             
    `
    }

    weekHtml(position) {
        return `
        <div class="scroll" onclick='scrollSelected(${position})'>
        <img class="cover" src="${this.cover}" width="200" height="300"> </img> 
        </div>
    `
    }
    
    }

