class person {
			constructor(name, birthYear, gender, mail, tel, address){
				this.name = name;
				this.birthYear = birthYear;
				this.gender = gender;
				this.mail = mail;
				this.tel = tel;
				this.address = address;
			}
			getAge(){
				let now = new Date();
				return now.getFullYear() - this.birthYear;
			}
		}