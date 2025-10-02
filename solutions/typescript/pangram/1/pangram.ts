export function isPangram(sentence: string): boolean {
    // if (sentence.length !== 26) return false;
    sentence = sentence.toLowerCase().trim()
    console.log("sentence.toLowerCase:", sentence);

    const seen = new Set<string>();
  
    for(let i=0; i<sentence.length; i++){
      const ch = sentence[i];
      if(!seen.has(ch) && /[a-z]/.test(ch)){
        seen.add(ch);
      }
    }
  console.log("seen===> ", seen)
    
    return seen.size === 26;
}