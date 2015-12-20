function CreatFile()
{
    var strFile = "d:\\test.txt";
    var objFSO = new ActiveXObject("Scripting.FileSystemObject");
    if(!objFSO.FileExists(strFile)){
    	var objStream = objFSO.CreateTextFile(strFile,true);
	alert("创建文本文件："+strFile);
	objStream.Close();
    }
    else
	alert("创建文件失败");
}

function DeleteFile()
{
    var strFile = "d:\\test.txt";
    var objFSO = new ActiveXObject("Scripting.FileSystemObject");
    if(!objFSO.FileExists(strFile)){
 	alert("文本文件：" + strFile + "不存在");
    }
    else{
    	var objStream = objFSO.DeleteFile(strFile,true);
	alert("删除文本文件："+strFile);
	objStream.Close();
    }   
}

