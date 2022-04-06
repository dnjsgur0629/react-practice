module.exports = function constVarPlugin() {
  return{
    visitor: {
      VariableDeclaration(path) {
        console.log("VariableDeclaration kind: ", path.node.kind);

        if(path.node.kind === 'const'){ //const면 var로 변경
          path.node.kind = "var";
        }
      }
    }
  }
}