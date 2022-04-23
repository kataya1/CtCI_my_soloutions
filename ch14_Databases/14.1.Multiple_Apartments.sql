select t.tenantID
from tenants as t 
left join aptTenants as aptn 
on t.tenantID = aptn.TenentID
group by t.tenantId having count( aptn.AptID) > 1