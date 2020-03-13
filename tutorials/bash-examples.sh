cat
cd
chmod
chown
cp

echo
exit
ffmpeg
ffprobe
find
history
lsof
man
mkdir
nano
ngrok
rm
rmdir

watch
zip

# Navigation
pwd
cd
ls

# Basics
which

# Create files on script
date
touch


# Get most common password starting sequence
wget https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Common-Credentials/10k-most-common.txt

wc -l passwords.txt
grep -e "\d" passwords.txt
grep -e "\d" passwords.txt | sort
cat passwords.txt | cut -b 1
head passwords.txt 
head passwords.txt | cut -b 1
man cut
cat passwords.txt | cut -b 1 | sort 
cat passwords.txt | cut -b 1 | sort | count -n
cat passwords.txt | cut -b 1 | sort | uniq -c
cat passwords.txt | cut -b 1 | sort | uniq -c | sort -n

# Networking
ping browardschools.com
whois browardschools.com
telnet 
http

# Disk status
df
du
htop
kill
htop

# Multi screen
screen