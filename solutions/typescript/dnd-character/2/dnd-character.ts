export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

constructor(){
  this.strength = DnDCharacter.generateAbilityScore();
  this.dexterity = DnDCharacter.generateAbilityScore();
  this.constitution = DnDCharacter.generateAbilityScore();
  this.intelligence = DnDCharacter.generateAbilityScore();
  this.wisdom = DnDCharacter.generateAbilityScore();
  this.charisma = DnDCharacter.generateAbilityScore();

  this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
}
  
  public static generateAbilityScore(): number {
    const rolls: number[] = [];
    for(let i = 0; i < 4; i++){
      rolls.push((Math.floor(Math.random() * 6))+1)
    }
    rolls.sort((a,b)=>a-b);
    rolls.shift();
    return rolls.reduce((sum,val)=>sum+val,0)
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue-10)/2)
  }
}
