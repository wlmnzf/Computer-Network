function CreatFile()
{
    var strFile = "d:\\test.txt";
    var objFSO = new ActiveXObject("Scripting.FileSystemObject");
    if(!objFSO.FileExists(strFile)){
    	var objStream = objFSO.CreateTextFile(strFile,true);
	alert("�����ı��ļ���"+strFile);
	objStream.Close();
    }
    else
	alert("�����ļ�ʧ��");
}

function DeleteFile()
{
    var strFile = "d:\\test.txt";
    var objFSO = new ActiveXObject("Scripting.FileSystemObject");
    if(!objFSO.FileExists(strFile)){
 	alert("�ı��ļ���" + strFile + "������");
    }
    else{
    	var objStream = objFSO.DeleteFile(strFile,true);
	alert("ɾ���ı��ļ���"+strFile);
	objStream.Close();
    }   
}

