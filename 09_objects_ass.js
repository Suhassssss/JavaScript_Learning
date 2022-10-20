let teacher = {
    name: "Suhas Lawate",
    subject: "Angular",
    degrees: {
        engineering: "CSC",
        PHD: "Adv Computing",
        HSC: "Science"
    },
    certificates: {
        certificate1: "Hacker Rank Participation",
        certificate2: "Certificate in IFE course",
        certificate3: "Certificate in Adv Programming"
    },
    details: function() {
        console.log(`Teacher degrees are: Engineering: ${this.degrees.engineering}, PHD: ${this.degrees.PHD}, HSC: ${this.degrees.HSC}`);
        return Object.keys(this.degrees).length;
    }
}
console.log("============================== Object teacher ===============================");
console.table(teacher);
console.log("============================ Nested Object degrees ==========================");
console.log(`Total degrees are: ${teacher.details()}`);
teacher.moNo = 1234567890;
console.log("=================== Mobile number added in object teacher ===================");
console.log(`Mobile No.: ${teacher.moNo}`);
teacher.moNo = 9078674578;
console.log("================= Mobile number modified in object teacher ==================");
console.table(teacher);
delete teacher.certificates.certificate3;
console.log("=========== Deleted certificate3 from nested object certificates ============");
console.table(teacher.certificates);
teacher.certificates.certificate3 = "Angular Developer";
console.log("============= Certificate3 added in nested object certificates ==============");
console.table(teacher.certificates);
