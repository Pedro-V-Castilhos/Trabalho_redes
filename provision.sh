sudo su
apt update
apt upgrade
sudo apt install -y software-properties-common
sudo apt-add-repository ppa:ansible/ansible
sudo apt update
apt-get install -y ansible
cd /home/VM-01
ansible-playbook ansible.yml
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
ansible-playbook ansible2.yml
sudo chmod +x /usr/local/bin/docker-compose
sudo apt install docker-ce=18.06.1~ce~3-0~ubuntu -y --force-yes
sudo docker-compose up -d