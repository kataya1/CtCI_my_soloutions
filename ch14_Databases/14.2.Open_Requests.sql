select buildingId, count( requestID) 
from apartments as ap
inner join (
    select AptID, RequestID 
    from requests 
    where description = 'open';
) R on R.aptId = ap.aptId 
group by ( buildingID )