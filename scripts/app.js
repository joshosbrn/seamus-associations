function toggle_visibility(id) {
	var id = document.getElementById(id);

  if (id.style.display == 'block')
    id.style.display = 'none';
  else
    id.style.display = 'block';
}
