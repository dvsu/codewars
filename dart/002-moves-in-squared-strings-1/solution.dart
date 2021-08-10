String vertMirror(String str) => str.splitMapJoin('\n',
    onMatch: (_) => '\n', onNonMatch: (n) => '${n.split('').reversed.join()}');

String horMirror(String str) => str.split('\n').reversed.join('\n');

String oper(String fct(String str), String s) => fct(s);
