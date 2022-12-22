function onCheck(){
    var sb=document.getElementById("viewreport").value
    if (sb=='subjectwise'){ 
        document.getElementById("subject_div").innerHTML = '';
        document.getElementById("subject_div").innerHTML +='<div style="display: flex;"><label class="form-label" style="width: 152.5469px;font-family: Poppins, sans-serif;font-weight: bold;color: var(--bs-gray-800);font-size: 15px;">Subject </label><select style="width: 208.875px;margin-left: -31px;"><option value="12" selected>English</option><option value="urdu">Urdu</option><option value="math">Maths</option><option value="science">Science</option><option value="islamiyat">Islamiyat</option><option value="sst">Social Studies</option></select></div>';
}
 else if (sb=='overall'){
    document.getElementById("subject_div").innerHTML = '';
 }
}

