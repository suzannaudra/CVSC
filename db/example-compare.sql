

select d1.data_id, d2.data_id, d1.name, d2.name, d1.y_value, d2.y_value, d1.x_value, d2.x_value
from (
	select d.data_id, d.name, v.x_value, v.y_value
	from data_names d
	inner join data_values v
	on d.data_id = v.data_id
    ) as d1
inner join (
	select d.data_id, d.name, v.x_value, v.y_value
	from data_names d
	inner join data_values v
	on d.data_id = v.data_id
    ) as d2 on d1.x_value = d2.x_value
where d1.data_id = 1 and d2.data_id = 2
;
