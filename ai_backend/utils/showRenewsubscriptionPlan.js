const showRenewSubscriptionPlan=(user)=>
{
    const today=new Date();
    return !user?.nextBilingDate || user?.nextBilingDate<=today;
}

module.exports={showRenewSubscriptionPlan};