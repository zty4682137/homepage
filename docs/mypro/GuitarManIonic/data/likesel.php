<?php
    header('Content-Type: application/json;charset=UTF-8');
    @$kw=$_REQUEST['kw'] or die('{"code":"2","msg","kw required"}');
    @$kw=$_REQUEST['type'] or die('{"code":"2","msg","type required"}');

    require("init.php");


//    ���ݿ������Ϊ php�����ô���
//    $sql="SELECT * FROM kf_dish WHERE name or material LIKE '%$kw%'";
//    $result=mysqli_query($conn,$sql);
//    $result=mysqli_fetch_all($result,1);
//    echo json_encode($result);


    $arrStr='{{"id":"0","img_sm":"1.jpg","type":"classic","name":"Martin 90c","material":"���������ĸ��ϰ弪����������ť��������������","price":"$940"},{"id":"1","img_sm":"1.jpg","type":"classic","name":"Martin 90c","material":"���������ĸ��ϰ弪����������ť��������������","price":"$940"}}';
    $arr={{"id":"0","img_sm":"1.jpg","type":"classic","name":"Martin 90c","material":"���������ĸ��ϰ弪����������ť��������������","price":"$940"},{"id":"1","img_sm":"1.jpg","type":"classic","name":"Martin 90c","material":"���������ĸ��ϰ弪����������ť��������������","price":"$940"}};

//    $arr2=''{
//    {id:"0",img_sm:"1.jpg",type:"classic",name:"Martin 90c",material:"���������ĸ��ϰ弪����������ť��������������",price:"$940"},
//    {id:"0",img_sm:"1.jpg",type:"classic",name:"Martin 90c",material:"���������ĸ��ϰ弪����������ť��������������",price:"$940"}
//    }'';

    echo json_encode($arr);

?>