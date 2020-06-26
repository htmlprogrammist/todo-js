let List1 = $('#tdl1App ul')
let Mask1 = 'tdl1_'

let List2 = $('#tdl2App ul')
let Mask2 = 'tdl2_'

let List3 = $('#tdl3App ul')
let Mask3 = 'tdl3_'

let List4 = $('#tdl4App ul')
let Mask4 = 'tdl4_'

function showTasks() {
  let Storage_size = localStorage.length
  if (Storage_size > 0) {
    for (let i = 0; i < Storage_size; i++) {
      let key = localStorage.key(i)
      if (key.indexOf(Mask1) == 0) {
        $('<li></li>').addClass('tdItem')
          .attr('data-itemid', key)
          .text(localStorage.getItem(key))
          .appendTo(List1)
      }
      if (key.indexOf(Mask2) == 0) {
        $('<li></li>').addClass('tdItem')
          .attr('data-itemid', key)
          .text(localStorage.getItem(key))
          .appendTo(List2)
      }
      if (key.indexOf(Mask3) == 0) {
        $('<li></li>').addClass('tdItem')
          .attr('data-itemid', key)
          .text(localStorage.getItem(key))
          .appendTo(List3)
      }
      if (key.indexOf(Mask4) == 0) {
        $('<li></li>').addClass('tdItem')
          .attr('data-itemid', key)
          .text(localStorage.getItem(key))
          .appendTo(List4)
      }
    }
  }
}

showTasks()

$('#tdl1App input').on('keydown', function (event) {
  if (event.keyCode != 13) return;
  let str = event.target.value
  event.target.value = ""

  if (str.length > 0) {
    let number_Id_1 = 0
    List1.children().each(function (index, el) {
      let element_Id_1 = $(el).attr('data-itemid').slice(5)
      if (element_Id_1 > number_Id_1) {
        number_Id_1 = element_Id_1
      }
    })
    number_Id_1++;

    localStorage.setItem(Mask1 + number_Id_1, str)
    $('<li></li>').addClass('tdItem')
      .attr('data-itemid', Mask1 + number_Id_1)
      .text(str).appendTo(List1)
  }
})

$('#tdl2App input').on('keydown', function (e) {
  if (e.keyCode != 13) return;
  var str = e.target.value;
  e.target.value = "";
  if (str.length > 0) {
    var number_Id_2 = 0;
    List2.children().each(function (index, el) {
      var element_Id_2 = $(el).attr('data-itemid').slice(5);
      if (element_Id_2 > number_Id_2)
        number_Id_2 = element_Id_2;
    })

    number_Id_2++;
    localStorage.setItem(Mask2 + number_Id_2, str);
    $('<li></li>').addClass('tdItem')
      .attr('data-itemid', Mask2 + number_Id_2)
      .text(str).appendTo(List2);
  }

});
$('#tdl3App input').on('keydown', function (e) {
  if (e.keyCode != 13) return;
  var str = e.target.value;
  e.target.value = "";
  if (str.length > 0) {
    var number_Id_3 = 0;
    List3.children().each(function (index, el) {
      var element_Id_3 = $(el).attr('data-itemid').slice(5);
      if (element_Id_3 > number_Id_3)
        number_Id_3 = element_Id_3;
    })

    number_Id_3++;
    localStorage.setItem(Mask3 + number_Id_3, str);
    $('<li></li>').addClass('tdItem')
      .attr('data-itemid', Mask3 + number_Id_3)
      .text(str).appendTo(List3)
  }
});

$('#tdl4App input').on('keydown', function (e) {
  if (e.keyCode != 13) return;
  var str = e.target.value
  e.target.value = "";
  if (str.length > 0) {
    var number_Id_4 = 0;
    List4.children().each(function (index, el) {
      var element_Id_4 = $(el).attr('data-itemid').slice(5);
      if (element_Id_4 > number_Id_4)
        number_Id_4 = element_Id_4;
    })
    number_Id_4++;
    localStorage.setItem(Mask4 + number_Id_4, str);
    $('<li></li>').addClass('tdItem')
      .attr('data-itemid', Mask4 + number_Id_4)
      .text(str).appendTo(List4);
  }
});

$(document).on('click', '.tdItem', function (e) {
  var jet = $(e.target);
  localStorage.removeItem(jet.attr('data-itemid'));
  jet.remove();
})