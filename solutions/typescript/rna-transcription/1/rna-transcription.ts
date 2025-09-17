export function toRna(dna: string):string {
  const map: Record<string, string> = {
    G : "C", C: "G", T: "A", A: "U"
  };

  return dna.split("").map((n)=>{
    const rna = map[n];
    if(!rna) throw new Error("Invalid input DNA.")
    return rna
  }).join("");
}
