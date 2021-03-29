const { capitalize, getSetterName } = require("./lib");

module.exports = {
  rules: {
    "setState-in-camel-case": {
      create: function (context) {
        return {
          VariableDeclarator(node) {
            if (
              node.init.callee.name === "useState" &&
              node.id.type === "ArrayPattern"
            ) {
              const stateNode = node.id.elements[0];
              const setterNode = node.id.elements[1];
              const idealName = capitalize(stateNode.name);
              if (getSetterName(setterNode.name) !== idealName)
                return context.report({
                  node: setterNode,
                  message: `The setter '${setterNode.name}' should be 'set${idealName}'`,
                  fix: (fixer) =>
                    fixer.replaceText(setterNode, `set${idealName}`),
                });
            }
          },
        };
      },
    },
  },
};
