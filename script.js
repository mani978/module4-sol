var names=new Array();
names[0]="john";
names[1]="harry";
names[2]="mark";
names[3]="jessie";
names[4]="jenny";
names[5]="paul";
names[6]="sam";
names[7]="laura";
names[8]="smith";
names[9]="gimmy";

for(var i=0;i<names.length;i++){
	if(names[i].charAt(0)==='J'||names[i].charAt(0)==='j'){
    console.log("GoodBye " +names[i])
	}
	else {
		console.log("Hello " +names[i])
	}

}