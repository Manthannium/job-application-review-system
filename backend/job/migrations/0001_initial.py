# Generated by Django 4.0.1 on 2022-08-15 04:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Candidate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('contact', models.CharField(max_length=120)),
                ('academic_qualification', models.CharField(max_length=120)),
                ('professional_experience', models.CharField(max_length=120)),
                ('skills', models.CharField(max_length=120)),
                ('status', models.IntegerField(default=1)),
                ('accepted', models.BooleanField(default=False)),
                ('rejected', models.BooleanField(default=False)),
            ],
        ),
    ]
