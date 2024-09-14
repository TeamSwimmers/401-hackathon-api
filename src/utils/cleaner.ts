export default function cleaner(object: any[], ...args: string[]) {
  for (const i in object) {
    for (const j in args) {
      try {
        delete object[i][args[j]];
      } catch {
        console.log(`Failed to delete ${args[i][j]} from ${args[i]}`);
      }
    }
  }

  //   for (const i in args) {
  //     try {
  //       delete object_copy[args[i]];
  //     } catch {
  //       console.log(`Failed to delete ${args[i]}`);
  //     }
  //   }
}
