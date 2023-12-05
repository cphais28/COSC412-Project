function results(){
    resources = ''
    if (document.forms[quiz_form].yes1.checked)
    {
        resources += 'Counseling on campus: https://www.towson.edu/counseling/\n'
    }
    alert(resources)
    document.getElementById("result_links").innerHTML;
}