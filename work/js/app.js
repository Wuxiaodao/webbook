var $note = $('#notepad-app');
var menubar = new Menubar();
var editor = new Editor();
var $editor = editor.init();
var dlgFont = new DlgFont(editor);
var $dlgFont = dlgFont.init();
$note.append($editor.show());
$note.after($dlgFont);
$note.click(menubar.hideMenu.bind(menubar));
