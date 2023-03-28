class Dog {
    constructor(data) {
        Object.assign(this, data);
    }


    getDogHtml() {
        return `
        <div class="dog">
            <img src="${this.avatar}" alt="${this.name}">
            <div class="dog-details">
            <h2 class="dog-name">${this.name}, ${this.age}</h2>
            <p class=dog-bio>${this.bio}</p>
            </div>
        </div>
        `;
    }
}

export default Dog;