let json1 = {
  menu: {
    id: "file",
    value: "File",
    popup: {
      menuitem: [
        { value: "New", onclick: "CreateNewDoc()" },
        { value: "Open", onclick: "OpenDoc()" },
        { value: "Close", onclick: "CloseDoc()" },
      ],
    },
  },
};

console.log(json1);
// console.log(JSON.parse(json1));
// already an json object so no need to parse it into json.

console.log(JSON.stringify(json1.id));
