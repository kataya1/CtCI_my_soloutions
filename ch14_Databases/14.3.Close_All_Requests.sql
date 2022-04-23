update Requests 
set status = "closed"
where aptid in (
    select AptID from apartments 
    where buildingID = 11
)


-- update Requests R 
-- inner join apartments ap
-- on R.aptID = ap.aptID
-- where ap.buildingID = 11
-- set status = "close"
