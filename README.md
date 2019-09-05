# FGEditor

<!-- English | [繁體中文](./README.zh-TW.md) -->

<!-- <p align="center">
  <a href="#">
    <img src="./logo.png">
  </a>
</p> -->

![Build](https://img.shields.io/badge/Build-success-green)
[![GitHub license](https://img.shields.io/github/license/DabaoHuang/FGEditor.js.svg)](https://github.com/DabaoHuang/FGEditor.js/blob/master/LICENSE)

## How to use ? 

Demo
```
<scirpt src="./FGEditor.js"></script>

<script language="javascript">
  window.onload = function () {
    var FGE = new FGEditor();
    FGE.init();
  }

  // edit-select
  function data_change(id)
  {
      // ajax ...
  } 
  // edit-textarea edit-input
  function data_submit(id)
  {
      // ajax ... 
  }
</script>

<body>
  <div class="FGE-select" data-id="select-1" data-command="data_change" data-source="select,one,two,three">two</div>
  <div class="FGE-input" data-id="input-1" data-command="data_submit" data-type="date">Dabao Huang</div>
  <div class="FGE-textarea" data-command="data_submit" data-id="content-1">Hi ,<br>say something ...</div>
</body>
```