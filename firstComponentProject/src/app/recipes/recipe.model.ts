export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(recipeName: string, recipeDescription: string, recipeImagePath: string) {
        this.name = recipeName;
        this.description = recipeDescription;
        this.imagePath = recipeImagePath;
    }
}