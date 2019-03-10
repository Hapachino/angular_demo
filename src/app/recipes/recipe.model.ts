export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    Object.assign(this, { name, description, imagePath });
  }
}
