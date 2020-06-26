let big_object = {
  lists: [
    { list: $('#tdl1App ul') },
    { list: $('#tdl2App ul') },
    { list: $('#tdl3App ul') },
    { list: $('#tdl4App ul') },
  ],
  masks: [
    { mask: 'tdl1_' },
    { mask: 'tdl2_' },
    { mask: 'tdl3_' },
    { mask: 'tdl4_' },
  ],
  element_id: [
    { el: 0 },
    { el: 0 },
    { el: 0 },
    { el: 0 },
  ],
  number_id: [
    { num: 0 },
    { num: 0 },
    { num: 0 },
    { num: 0 },
  ]
}

function showTasks() {
  let Storage_size = localStorage.length
  if (Storage_size > 0) {
    for (let i = 0; i < Storage_size; i++) {
      let key = localStorage.key(i)
      for (let j = 0; j <= 3; j++) {
        if (key.indexOf(big_object.masks[j].mask) == 0) {
          $('<li></li>').addClass('tdItem')
            .attr('data-itemid', key)
            .text(localStorage.getItem(key))
            .appendTo(big_object.lists[j].list)
        }
      }
    }
  }
}

showTasks()


function pressed(e, col) {

  if (e.keyCode != 13) return;
  let str = e.target.value;
  e.target.value = ""

  if (str.length > 0) {
    big_object.number_id[col].num = 0
    big_object.element_id[col].el = 0
    big_object.lists[col].list.children().each(function (index, el) {
      big_object.element_id[col].el = $(el).attr('data-itemid').slice(5);
      if (big_object.element_id[col].el > big_object.number_id[col].num)
        big_object.number_id[col].num = big_object.element_id[col].el;
    })
    big_object.number_id[col].num++;
    localStorage.setItem(big_object.masks[col].mask + big_object.number_id[col].num, str)
    $('<li></li>').addClass('tdItem')
      .attr('data-itemid', big_object.masks[col].mask + big_object.number_id[col].num)
      .text(str).appendTo(big_object.lists[col].list);
  }
}

$('#tdl1App input').on('keydown', function (e) {
  pressed(e, 0)
})
$('#tdl2App input').on('keydown', function (e) {
  pressed(e, 1)
})
$('#tdl3App input').on('keydown', function (e) {
  pressed(e, 2)
})
$('#tdl4App input').on('keydown', function (e) {
  pressed(e, 3)
})
$(document).on('click', '.tdItem', function (e) {
  let jet = $(e.target)
  localStorage.removeItem(jet.attr('data-itemid'));
  jet.remove();
})