function date(id)
{
        var date = new Date;
		result = date.toDateString() + ' ';
        document.getElementById(id).innerHTML = result;
        setTimeout('date("'+id+'");','1000');
        return true;
}