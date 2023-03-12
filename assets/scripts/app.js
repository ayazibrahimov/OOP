class PersonData{
 
    constructor(name,img,title){
        this.name = name 
        this.img = img;
        this.title = title
    }

}


console.log(new PersonData('Ataz',"sssssss",'sikatan'));



const person = {
    datas:[
       new PersonData('',
       'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/ef7ibwp5whebwhjt_1640932296.jpeg',
       'Lionel Andrés Messi[note 1] (Spanish pronunciation: [ljoˈnel anˈdɾes ˈmesi] (listen); born 24 June 1987), also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team.')
        ,new PersonData('Ronaldo',
       'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/ef7ibwp5whebwhjt_1640932296.jpeg',
       'Lionel Andrés Messi[note 1] (Spanish pronunciation: [ljoˈnel anˈdɾes ˈmesi] (listen); born 24 June 1987), also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team.')
    ],


    renderData(){
          
        const app = document.querySelector('#app')

        const itemList = document.createElement('ul')

        itemList.className = 'product-list'

        this.datas.forEach(data=>{

            const itemLink = document.createElement('li')
             itemLink.className = 'product-item'

             itemLink.innerHTML = `
              <div>
                <img src=${data.img}/>
                 <div>
                  <h2>${data.name}</h2>
                  <p className='product-item__content'>${data.title}</p> 
                  <button>Tikla</button>
                 </div>
              </div>  
             `

             itemList.append(itemLink)

        })

        app.append(itemList)
    }

}


person.renderData()


















