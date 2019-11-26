

echo ""
echo "*****build*****"
yarn build
echo ""
echo "*****build down*****"

echo ""
echo "*****tar -zcvf*****"
tar -zcvf ./allen.me.tgz .
echo ""
echo "*****tar -zcvf*****"

echo ""
echo "*****scp tgz*****"
scp  allen.me.tgz  utauu:/utauu
echo ""
echo "*****scp tgz down*****"
