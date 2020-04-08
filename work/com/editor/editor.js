function Editor () {
  // 定义编辑区元素
  this.$editor = $('<div class="editor"></div>');
  this.$textarea = $('<textarea spellcheck="false"></textarea>');

  // 初始化添加返回元素
  this.init = function () {
    this.$editor.append(this.$textarea);
    return this.$editor;
  };

}


