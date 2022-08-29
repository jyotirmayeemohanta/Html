# echo "# OTP" >> README.md
# git init
# git add README.md
# git commit -m "first commit"
# git branch -M main
# git remote add origin https://github.com/jyotirmayeemohanta/OTP.git
# git push -u origin main


# num=input("enter your name")
# i=0
# while i<=num:
#     if name ==upper:
#         print(name,lower)
#     else:
#         print(name,upper)
#     i+=1
# print(name)

Name=input("Enter anything:-")
string=""
for i in range (len(Name)):
    if Name[i].isupper():
        string+=Name[i].lower()
    elif Name[i].islower():
        string+=Name[i].upper()
    else:
        string+=Name[i]
print(string)