# echo ""
# echo "*****yarn tsc create*****" 
# echo ""
# yarn tsc
# echo ""
# echo "*****yarn tsc  create done*****"


echo ""
echo "*****docker-compose down*****" 
echo ""
docker-compose down
echo ""
echo "*****docker-compose down done*****"


echo ""
echo "*****docker rmi utauu-service_utauu-service*****" 
echo ""
docker rmi allenme_allen-next
echo ""
echo "*****docker rmi utauu-service_utauu-service done*****"


echo ""
echo "*****docker-compose start*****"
echo ""
docker-compose up -d
echo ""
echo "*****docker-compose done*****"