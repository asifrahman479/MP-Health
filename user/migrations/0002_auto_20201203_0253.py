# Generated by Django 3.0.3 on 2020-12-03 02:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='IsAllDay',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='IsReadonly',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='ResourceId',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='RoomId',
        ),
        migrations.AddField(
            model_name='appointment',
            name='DoctorID',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='user.Doctor'),
        ),
        migrations.AddField(
            model_name='appointment',
            name='PatientID',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='user.Patient'),
        ),
        migrations.AlterField(
            model_name='doctor',
            name='ClinicID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.Clinic'),
        ),
    ]
